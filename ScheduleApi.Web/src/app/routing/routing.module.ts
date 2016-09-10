import { Routes, RouterModule } from '@angular/router';

import {
    AuthenticationGuard
} from "./providers";


import {
    // public 
    HomePageComponent,
    LoginPageComponent,

    EditChannelPageComponent,
    EditEpisodePageComponent,
    EditScheduleItemPageComponent,
    EditTvShowPageComponent,

    ChannelListPageComponent,
    EpisodeListPageComponent,
    ScheduleItemListPageComponent,
    TvShowListPageComponent    
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'channel/list',
        component: ChannelListPageComponent
    },
    {
        path: 'channel/edit/:id',
        component: EditChannelPageComponent
    },
    {
        path: 'channel/create',
        component: EditChannelPageComponent
    },
    {
        path: 'episode/list',
        component: EpisodeListPageComponent
    },
    {
        path: 'episode/edit/:id',
        component: EditEpisodePageComponent
    },
    {
        path: 'episode/create',
        component: EditEpisodePageComponent
    },
    {
        path: 'tvshow/list',
        component: TvShowListPageComponent
    },
    {
        path: 'tvshow/edit/:id',
        component: EditTvShowPageComponent
    },
    {
        path: 'tvshow/create',
        component: EditTvShowPageComponent
    },
    {
        path: 'scheduleitem/list',
        component: ScheduleItemListPageComponent
    },
    {
        path: 'scheduleitem/edit/:id',
        component: EditScheduleItemPageComponent
    },
    {
        path: 'scheduleitem/create',
        component: EditScheduleItemPageComponent
    }
];



export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    HomePageComponent
];

