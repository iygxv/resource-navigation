/*
 * @Description:收藏夹组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:45:42
 * @LastEditTime: 2022-03-11 13:45:57
 * @FilePath: \warbler-homepage\src\components\BookMark\index.ts
 */

import { LabelsProps } from 'coms/LabelList/index';
import data from './data';
// 标签列表
export type LabelListProps = LabelsProps[];

// 初始数据
export const initData: any = data;

// 数据类型
export interface BookmarkState {
  warblerData: LabelListProps;
  editMode: boolean;
  motto: string;
}

const mottoList = [
  '千万不要因为走得太久，而忘记了我们为什么出发',
  '人生就像一场修行，你不可能一开始就修成正果',
  '无论多么沉重的负担，也不要忘记微笑；无论多么漫长的路程，也不要忘记坚持',
  '生活的真谛不在繁华，而在于淡泊',
];

export const getMotto = () => {
  const random = Math.floor(Math.random() * mottoList.length);
  return mottoList[random];
};
