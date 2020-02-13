export default class Global {
  static sharedInstance =
    this.sharedInstance == null ? new Global() : this.sharedInstance;

  apikey = '61ff6fef344e4138ae22d0c7d81fc372';
}
