namespace ScheduleApi.Data
{
    public interface IUow
    {
        IRepository<Models.ScheduleItem> ScheduleItems { get; }
        IRepository<Models.User> Users { get; }
        void SaveChanges();
    }
}
