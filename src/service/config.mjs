var A;
!function(A) {
  A[A.OK = 2000] = "OK";
  A[A.TOKEN_INVALID = 3001] = "TOKEN_INVALID";
  A[A.TOKEN_EXPIRED = 3002] = "TOKEN_EXPIRED";
  A[A.PARAM_LACK = 3003] = "PARAM_LACK";
  A[A.PARAM_WRONG_FORMAT = 3004] = "PARAM_WRONG_FORMAT";
  A[A.UNAUTHORIZED = 3005] = "UNAUTHORIZED";
  A[A.POST_REPEAT = 3007] = "POST_REPEAT";
  A[A.REQUEST_METHOD_INVALID = 3008] = "REQUEST_METHOD_INVALID";
  A[A.INVALID_PARAM = 3009] = "INVALID_PARAM";
  A[A.NOT_SUPPORT = 3010] = "NOT_SUPPORT";
  A[A.NOT_FOUND_DATA = 3011] = "NOT_FOUND_DATA";
  A[A.INVALID_OPERATION = 3012] = "INVALID_OPERATION";
  A[A.INVALID_JSON_FORMAT = 3013] = "INVALID_JSON_FORMAT";
  A[A.DATA_ERROR = 4001] = "DATA_ERROR";
  A[A.NOT_FOUND_USER = 4004] = "NOT_FOUND_USER";
}(A || (A = {}));
const O = {
  [A.TOKEN_INVALID]: "非法的token",
  [A.TOKEN_EXPIRED]: "token已失效",
  [A.PARAM_LACK]: "缺失参数",
  [A.PARAM_WRONG_FORMAT]: "参数格式不正确",
  [A.UNAUTHORIZED]: "未授权",
  [A.POST_REPEAT]: "重复提交",
  [A.REQUEST_METHOD_INVALID]: "非法的请求方式",
  [A.INVALID_PARAM]: "非法的请求参数",
  [A.NOT_SUPPORT]: "不支持该操作",
  [A.NOT_FOUND_DATA]: "找不到数据",
  [A.INVALID_OPERATION]: "无效操作",
  [A.INVALID_JSON_FORMAT]: "错误的JSON格式",
  [A.DATA_ERROR]: "数据错误",
  [A.NOT_FOUND_USER]: "user_code 未知",
  [A.OK]: "Token 过期了",
  500: "服务器繁忙，请稍后再试"
};
export { A as Code, O as ERROR_CODES };