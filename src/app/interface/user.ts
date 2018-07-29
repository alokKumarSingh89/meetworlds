export interface User {
    channelType: string;
    channelName: string;
    status: string;
}
export const displayHeader = ['channelType', 'channelName', 'status'];

const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const STATUS: string[] = ['Active','InActive']
export function createNewUser(id: number): User{
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    channelType: id.toString(),
    channelName: name,
    status: STATUS[Math.floor(Math.random() * 2)]
  };
}
