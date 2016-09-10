using ScheduleBackendService.Models;
using System.Data.Entity;

namespace ScheduleBackendService.Data
{
    public class DataContext: DbContext, IDbContext
    {
        public DataContext()
            : base(nameOrConnectionString: "ScheduleApiDataContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<ScheduleItem> ScheduleItems { get; set; }
        public DbSet<User> Users { get; set; }
        

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        } 
    }
}
