import { MdBolt, MdOutlineConstruction, MdOutlineGroupAdd } from "react-icons/md";

export const frontDeskTargetList = [
  {
    tag: 'home',
    linkList: [
      { type: 'normal', tag: 'Overview', iconEl: <MdBolt />, target: '/' },
      { type: 'normal', tag: 'Add Guest', iconEl: <MdOutlineGroupAdd />, target: '/frontDesk/addGuest' },
      {
        type: 'dropDown', tag: 'Dropped', iconEl: <MdOutlineConstruction />, index: 0,
        subList: [
          { tag: 'Posts', target: '/posts' },
          { tag: 'Blog', target: '/blog' }
        ]
      }
    ]
  },
  {
    tag: 'Guests',
    linkList: [
      { type: 'normal', tag: 'Check-Ins', iconEl: <MdBolt />, target: '/' },
      { type: 'normal', tag: 'Payments', iconEl: <MdBolt />, target: '/' },
      { type: 'normal', tag: 'Check-Outs', iconEl: <MdBolt />, target: '/' },
    ]
  },
  {
    tag: 'Rooms',
    linkList: [
      { type: 'normal', tag: 'Available Rooms', iconEl: <MdBolt />, target: '/' },
      { type: 'normal', tag: 'Rates', iconEl: <MdBolt />, target: '/' }
    ]
  },
  {
    tag: 'Events',
    linkList: [
      { type: 'normal', tag: 'Delivery', iconEl: <MdBolt />, target: '/' },
      {
        type: 'dropDown', tag: 'Logistics', iconEl: <MdOutlineConstruction />, index: 1,
        subList: [
          { tag: 'Dispatch', target: '/posts' },
          { tag: 'Warehouse', target: '/blog' }
        ]
      }
    ]
  },
  {
    tag: 'Rooms',
    linkList: [
      { type: 'normal', tag: 'Room Types', iconEl: <MdBolt />, target: '/admin/roomTypes' },
      { type: 'normal', tag: 'Room Lists', iconEl: <MdBolt />, target: '/admin/rooms' },
    ]
  }
]

export const cedi = 'GH₵';
export const cediShort = '₵';


// {
//   tag: 'Apps',
//   linkList: [
//     { type: 'normal', tag: 'Delivery', iconEl: <MdBolt />, target: '/' },
//     {
//       type: 'dropDown', tag: 'Logistics', iconEl: <MdOutlineConstruction />, index: 1,
//       subList: [
//         { tag: 'Dispatch', target: '/posts' },
//         { tag: 'Warehouse', target: '/blog' }
//       ]
//     }
//   ]
// }