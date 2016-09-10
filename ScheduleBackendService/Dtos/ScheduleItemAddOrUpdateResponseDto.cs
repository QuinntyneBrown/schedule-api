namespace ScheduleBackendService.Dtos
{
    public class ScheduleItemAddOrUpdateResponseDto: ScheduleItemDto
    {
        public ScheduleItemAddOrUpdateResponseDto(Models.ScheduleItem entity)
        :base(entity)
        {

        }
    }
}
