using System.Collections.Generic;

namespace ScheduleBackendService.Dtos
{
    public class ScheduleDto
    {
        public ICollection<ScheduleDayDto> Days { get; set; } = new HashSet<ScheduleDayDto>();
    }
}
