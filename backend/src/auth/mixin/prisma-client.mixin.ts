import { PrismaClient } from '@prisma/client';

export function PrismaClientMixin<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    prisma = new PrismaClient();

    async onModuleInit() {
      await this.prisma.$connect();
    }
  };
}
