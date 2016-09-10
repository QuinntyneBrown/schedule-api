using ScheduleBackendService.Dtos;
using System.Collections.Generic;

namespace ScheduleBackendService.Services
{
    public interface IScheduleItemService
    {
        ScheduleItemAddOrUpdateResponseDto AddOrUpdate(ScheduleItemAddOrUpdateRequestDto request);
        ICollection<ScheduleItemDto> Get();
        ScheduleItemDto GetById(int id);
        dynamic Remove(int id);
    }
}
