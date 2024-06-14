import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy, StrategyOptions  } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { Injectable, Logger, OnModuleInit, UnauthorizedException } from "@nestjs/common";
import { PrismaClientMixin } from "../mixin/prisma-client.mixin";
import { envs } from "src/config/envs";

@Injectable()
export class JwtStrategy extends PrismaClientMixin(PassportStrategy(Strategy)) implements OnModuleInit {

  private readonly logger = new Logger('Authservice');

  // constructor(
  //   configService: ConfigService
  // ) {
  //   super({
  //     secretOrKey: configService.get('JWT_SECRET'),
  //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //     // ignoreExpiration: false,
  //     // (req) => req.cookies['jwt']
  //   });
  // }

  constructor() {
    // Asegúrate de pasar correctamente la configuración de la estrategia JWT
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envs.jwtSecret, // Cambia esto por tu clave secreta real
    };

    super(options);
  }

  async onModuleInit() {
    await super.onModuleInit();

    this.logger.log('Authservice connected to database')
  }

  async validate(payload: JwtPayload) {
    const { id } = payload;
    const user = await this.prisma.user.findUnique({where:{id}  });

    if (!user) throw new UnauthorizedException('Token not valid');
    if (!user.isActive) throw new UnauthorizedException('User is inactive, talk with an admin');
    return user;
  }
}
