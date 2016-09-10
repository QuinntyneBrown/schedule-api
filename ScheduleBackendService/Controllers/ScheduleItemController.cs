using ScheduleBackendService.Dtos;
using ScheduleBackendService.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace ScheduleBackendService.Controllers
{
    [Authorize]
    [RoutePrefix("api/scheduleItem")]
    public class ScheduleItemController : ApiController
    {
        public ScheduleItemController(IScheduleItemService scheduleItemService)
        {
            _scheduleItemService = scheduleItemService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(ScheduleItemAddOrUpdateResponseDto))]
        public IHttpActionResult Add(ScheduleItemAddOrUpdateRequestDto dto) { return Ok(_scheduleItemService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(ScheduleItemAddOrUpdateResponseDto))]
        public IHttpActionResult Update(ScheduleItemAddOrUpdateRequestDto dto) { return Ok(_scheduleItemService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<ScheduleItemDto>))]
        public IHttpActionResult Get() { return Ok(_scheduleItemService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(ScheduleItemDto))]
        public IHttpActionResult GetById(int id) { return Ok(_scheduleItemService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_scheduleItemService.Remove(id)); }

        protected readonly IScheduleItemService _scheduleItemService;


    }
}
