enum Options {
  Disbale = 'disable_non_proxied_udp',
  Default = 'default',
  PublicInterfaceOnly = 'default_public_interface_only'
}

export class WebRTCIPControl {
  public async publicOnly() {
    chrome.privacy.network.webRTCIPHandlingPolicy.set({
      value: Options.PublicInterfaceOnly
    });
  }

  public async disable() {
    chrome.privacy.network.webRTCIPHandlingPolicy.set({
      value: Options.Disbale
    });
  }

  public async reset() {
    chrome.privacy.network.webRTCIPHandlingPolicy.set({
      value: Options.Default
    });
  }
}
