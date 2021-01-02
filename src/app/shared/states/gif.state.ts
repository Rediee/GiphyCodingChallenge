// import {State, Action, StateContext, Selector} from '@ngxs/store';
// import {Gif} from '../../model/Gif';
// import {tap} from 'rxjs/operators';
// import { GifService } from '../service/gif.service';
// import { GetGifs } from '../actions/gif.action';

// export class GifStateModel {
//     gifs: Gif[];
// }

// @State<GifStateModel>({
//     name: 'gifs',
//     defaults: {
//         gifs: [],
//     }
// })
// export class GifState {

//     constructor(private gifService: GifService) {
//     }

//     @Action(GetGifs)
//     getGifs({getState, setState}: StateContext<GifStateModel>) {
//         return this.gifService.fetchGifs().pipe(tap((result) => {
//             const state = getState();
//             setState({
//                 ...state,
//                 gifs: result,
//             });
//         }));
//     }

// }