using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ScheduleBackendService.Services
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}
