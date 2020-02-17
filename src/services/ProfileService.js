import storage from '../storage/storage.ts';
class ProfileService {
  setSavedData = async ({username = '', preference = ''}) => {
    const user = {username, preference};
    await storage.set('username', !!username ? username : '');
    await storage.set('preference', !!preference ? preference : '');
  };

  getStoredData = async () => {
    const username = await storage.get('username');
    const preference = await storage.get('preference');
    return {username, preference};
  };
}

export default new ProfileService();
