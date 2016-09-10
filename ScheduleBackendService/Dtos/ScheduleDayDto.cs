using System.Collections.Generic;

namespace ScheduleBackendService.Dtos
{
    public class ScheduleDayDto
    {
        public ICollection<ScheduleItemDto> ScheduleItems { get; set; } = new HashSet<ScheduleItemDto>();
    }
}
