using System;
using System.Collections.Generic;
using ScheduleApi.Dtos;
using ScheduleApi.Data;
using System.Linq;

namespace ScheduleApi.Services
{
    public class ScheduleItemService : IScheduleItemService
    {
        public ScheduleItemService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.ScheduleItems;
            _cache = cacheProvider.GetCache();
        }

        public ScheduleItemAddOrUpdateResponseDto AddOrUpdate(ScheduleItemAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.ScheduleItem());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new ScheduleItemAddOrUpdateResponseDto(entity);
        }

        public ICollection<ScheduleItemDto> Get()
        {
            ICollection<ScheduleItemDto> response = new HashSet<ScheduleItemDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new ScheduleItemDto(entity)); }
            return response;
        }

        public ScheduleItemDto GetById(int id)
        {
            return new ScheduleItemDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.ScheduleItem> _repository;
        protected readonly ICache _cache;
    }
}
