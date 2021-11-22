/**
 * 属性集合
 */

const styleAttrs = {
  display: [
    {
      title: '块级布局',
      name: '\ue62a',
      key: 'block',
    },
    {
      title: '弹性布局',
      name: '\ued99',
      key: 'flex',
    },
  ],
  flexDirection: [
    {
      title: '由左向右',
      name: '\ue632',
      key: 'row',
    },
    {
      title: '由右向左',
      name: '\ue633',
      key: 'row-reverse',
    },
    {
      title: '由上向下',
      name: '\ue631',
      key: 'column',
    },
    {
      title: '由下向上',
      name: '\ue630',
      key: 'column-revers',
    },
  ],
  flexWrap: [
    {
      title: '不换行',
      name: '\ue608',
      key: 'nowrap',
    },
    {
      title: '换行，第一行在上方',
      name: '\ue61e',
      key: 'wrap',
    },
    {
      title: '换行，第一行在下方',
      name: '\ue60e',
      key: 'wrap-reverse',
    },
  ],
  justifyContent: [
    {
      title: '左对齐',
      name: '\ue604',
      key: 'flex-start',
    },
    {
      title: '右对齐',
      name: '\ue605',
      key: 'flex-end',
    },
    {
      title: '居中',
      name: '\ue63b',
      key: 'center',
    },
    {
      title: '两端对齐，两端不留间隔',
      name: '\ue663',
      key: 'space-between',
    },
    {
      title: '间隔平分，两端间隔为中间间隔的一半',
      name: '\ue64a',
      key: 'space-around',
    },
  ],
};

export default styleAttrs;