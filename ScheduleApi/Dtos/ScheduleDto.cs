using System.Collections.Generic;

namespace ScheduleApi.Dtos
{
    public class ScheduleDto
    {
        public ICollection<ScheduleDayDto> Days { get; set; } = new HashSet<ScheduleDayDto>();
    }
}
