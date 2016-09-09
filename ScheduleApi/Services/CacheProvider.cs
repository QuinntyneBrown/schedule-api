using ScheduleApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ScheduleApi.Services
{
    public class CacheProvider : ICacheProvider
    {
        public ICache GetCache()
        {
            return MemoryCache.Current;
        }
    }
}
