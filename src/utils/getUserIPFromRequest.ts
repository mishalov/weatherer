const getUserIPFromRequest = (req: any) => {
  let ip =
    (req.headers["x-forwarded-for"] || "").split(",").pop() ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress;

  if (ip && ip[0] == ":") {
    ip = ip.slice(7);
  }

  return ip;
};

export default getUserIPFromRequest;
