namespace ScheduleApi.Data
{
    public interface IUow
    {
        IRepository<Models.ScheduleItem> ScheduleItems { get; }
        void SaveChanges();
    }
}
