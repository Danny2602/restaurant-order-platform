import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { UserRole } from '@prisma/client';

// @Injectable() Metodo de roles Prueba
// export class RolesGuard implements CanActivate {
//   constructor(private readonly reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const roles = this.reflector.get<UserRole[]>(
//       'roles',
//       context.getHandler(),
//     );

//     if (!roles) {
//       return true;
//     }

//     const request = context.switchToHttp().getRequest();
//     const user = request.user;

//     if (!user) {
//       return false;
//     }

//     return roles.some((role) => user.role === role);
//   }
// }

