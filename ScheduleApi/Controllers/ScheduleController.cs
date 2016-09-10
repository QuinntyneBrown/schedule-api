using ScheduleApi.Dtos;
using ScheduleApi.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace ScheduleApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/schedule")]
    public class ScheduleController : ApiController
    {
        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<ScheduleDto>))]
        public IHttpActionResult Get() { return Ok(_scheduleService.Get()); }

        protected readonly IScheduleService _scheduleService;
    }
}
