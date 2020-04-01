/* Import from Data-Access-Layer */
import * as positionRepo from "../dal/repos/positionRepo";

export const selectAll = async () => {
  positionRepo.selectAll();
};

export const insert = async (data: any) => {
  positionRepo.insert(data);
};
