import $api from "../http/index";

export default class IpService {
  static async blockIp(formData) {
    return $api.post("ip/block-ip", formData);
  }

  static async checkIpBlock(formData) {
    return $api.post("ip/check-ip-block", formData);
  }
}
