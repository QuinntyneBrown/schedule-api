namespace ScheduleApi.Dtos
{
    public class ScheduleItemDto
    {
        public ScheduleItemDto()
        {

        }

        public ScheduleItemDto(Models.ScheduleItem entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
