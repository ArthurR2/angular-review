"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLES_KEY = exports.Role = void 0;
const common_1 = require("@nestjs/common");
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => common_1.SetMetadata(exports.ROLES_KEY, roles);
exports.Roles = Roles;
