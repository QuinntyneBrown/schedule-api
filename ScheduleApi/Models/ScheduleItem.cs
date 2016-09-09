using System;

namespace ScheduleApi.Models
{
    public class ScheduleItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime AirDate { get; set; }
        public string Description { get; set; }
        public bool IsPremiere { get; set; }
        public bool IsDeleted { get; set; }
        public ScheduleItemType Type { get; set; }
    }
}
