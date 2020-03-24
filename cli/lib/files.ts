import fs from 'fs';
import path from 'path';

export default {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath:string) => {
    return fs.existsSync(filePath);
  }
}