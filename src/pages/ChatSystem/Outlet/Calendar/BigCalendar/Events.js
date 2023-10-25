const now = new Date();

export default [
  {
    id: 0,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours())),
    end: new Date(new Date().setHours(new Date().getHours()))
  },
  {
    id: 1,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2023, 9, 1),
    end: new Date(2023, 9, 2)
  },
  {
    id: 2,
    title: "Long Event",
    start: new Date(2023, 9, 7),
    end: new Date(2023, 9, 10)
  },

];