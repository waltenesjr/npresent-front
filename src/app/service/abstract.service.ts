/**
 * Created by iago.almeida on 05/06/2017.
 */
// Imports
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http/src/response';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {environment} from '../../environments/environment';

@Injectable()
export class AbstractService<T> {

    /**
     * @param {HttpClient} _http.
     * @param {string} route.
     */
    constructor(protected _http: HttpClient,
                protected route: string) {
        this.route = `${environment.URL_SERVER_API}` + '/' + route;
    }

    /**
     * Chamada rest usada para trazer a lista de <T[]> para uma entidade, sem filtros adicionais, porém pode ser
     * levada apenas ativos nesta lista quando ha exclusão lógica.
     * @param {any} params.
     * @return Observable<T[]>
     */
    getList(params: any = {}): Observable<T[] | any[]> {
        return this._http.get(this.route + '/all', {
            params: ((params == null || params == undefined) ? <any>{} : params)}).map(resp => resp as T[]);
    }

    /**
     * Chamada rest usada para trazer <T> para uma entidade, apenas com id como filtro, porém pode ser
     * levada apenas ativos nesta lista quando ha exclusão lógica.
     * @param {number} id.
     * @return Observable<T>
     */
    get(id: number): Observable<T | any> {
        return this._http.get(this.route + '/' + id).map(resp => resp as T);
    }

    /**
     * Responsável por decidir se o recurso será persistido ou será uma alteração do existente
     * @param {any} resource.
     * @return Observable<T> com referencia do objeto persistido/alterado
     */
    save(resource: any): Observable<T | any> {
        return resource.id ? this.update(resource) : this.create(resource);
    }

    /**
     * Chamada rest usada para alterar <T>,
     * @param {any} updatedResource.
     * @return Observable<T> com referencia do objeto alterado
     */
    update(updatedResource: any): Observable<T | any> {
        return this._http.put(this.route + '/', updatedResource).map(resp => resp as T);
    }

    /**
     * Chamada rest usada para persistir <T>,
     * @param {any} newResource.
     * @return Observable<T> com referencia do objeto persistido
     */
    create(newResource: any): Observable<T | any> {
        return this._http.post(this.route + '/add', newResource).map(resp => resp as T);
    }

    /**
     * Chamada rest usada para deletar <T>, passa o id do recurso como parâmetro, porém pode ser
     * usado para inativar determinado recurso(exclusao logica) ou realizar o delete real do objeto;
     * @param {any} resource.
     */
    remove(resource: any) {
        return this._http.delete(this.route, resource.id).map(resp => resp);
    }

    /**
     * Chamada rest usada para deletar <T[]>, passa a listta de ids dos recursos como parâmetro, porém pode ser
     * usado para inativar determinados recursos(exclusao logica) ou realizar o delete real dos objetos;
     * @param {number[]} listIds.
     */
    removeAll(listIds: number[]) {
        return this._http.post(this.route + '/removeAll', listIds).map(resp => resp as T[]);
    }

    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${JSON.stringify(error.error)}`);
        }

        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    }
}
