using System;
using System.Collections.Generic;
using ScheduleBackendService.Data;
using ScheduleBackendService.Dtos;
using System.Data.Entity;
using System.Linq;
using ScheduleBackendService.Models;

namespace ScheduleBackendService.Services
{
    public class ScheduleService : IScheduleService
    {
        public ScheduleService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _cache = cacheProvider.GetCache();
        }

        public ScheduleDto Get()
        {
            throw new NotImplementedException();
        }

        protected readonly IUow _uow;
        protected readonly ICache _cache;


    }
}
