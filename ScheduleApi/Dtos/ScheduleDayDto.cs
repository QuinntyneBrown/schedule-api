using System.Collections.Generic;

namespace ScheduleApi.Dtos
{
    public class ScheduleDayDto
    {
        public ICollection<ScheduleItemDto> ScheduleItems { get; set; } = new HashSet<ScheduleItemDto>();
    }
}
