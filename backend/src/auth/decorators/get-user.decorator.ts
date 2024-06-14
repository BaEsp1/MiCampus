import { createParamDecorator, ExecutionContext, ForbiddenException, InternalServerErrorException } from "@nestjs/common";



export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext)=>{

    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    // console.log(user);
    // console.log(req.params.id);
    // console.log(user.id);

    if(!user) throw new InternalServerErrorException('User not found (request)');

    if (data && data.checkAdminOrSelf) {
      const userId = req.params.id;
      if (!user.roles?.includes('admin') && user.id !== userId) {
        throw new ForbiddenException('You do not have permission to perform this action');
      }
      return (user);
    }

    return (!data)? (user): (user[data]);
  }
)
