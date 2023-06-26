var validIPAdress = function (queryIP) {
  // 判断是否为IPv4
  if (/^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(queryIP)) {
    return 'IPv4';
  }
  // 判断是否为IPv6
  if (/^(([0-9]|[a-f]|[A-F]){1,4}\:){7}([0-9]|[a-f]|[A-F]){1,4}$/.test(queryIP)) {
    return 'IPv6';
  }
  return 'Neither';
};

console.log(validIPAdress('2001:0bd8:85a3:0000:'));