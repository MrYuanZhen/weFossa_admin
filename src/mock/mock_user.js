import ApiPath from "@/axios/api"
const Mock = require("mockjs")

Mock.mock(ApiPath.user.logining, "post", {
  "status": "@boolean",
  "msg": function() {
    return this.status ? "登录成功" : "登录失败"
  },
  "code": function() {
    return this.status ? 200 : 500
  },
  "data": {
    "userId": "@guid",
    "userName": "admin",
    "passWord": "admin"
  }
})

