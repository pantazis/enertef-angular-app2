import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Service, ServiceFilter, ServiceListResponse, ServiceCategory, ServiceTag } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getServices(filter: ServiceFilter): Observable<ServiceListResponse> {
    // This would normally make an HTTP call to the backend
    // For now, return an error to trigger mock data loading
    return throwError('Backend not implemented yet');
  }

  getCategories(): Observable<ServiceCategory[]> {
    // This would normally make an HTTP call to the backend
    return throwError('Backend not implemented yet');
  }

  getTags(): Observable<ServiceTag[]> {
    // This would normally make an HTTP call to the backend
    return throwError('Backend not implemented yet');
  }

  getService(id: string): Observable<Service> {
    // This would normally make an HTTP call to the backend
    return throwError('Backend not implemented yet');
  }

  // Future methods for when backend is ready:
  // createServiceRequest(serviceId: string, requestData: any): Observable<any>
  // contactProvider(serviceId: string, message: string): Observable<any>
  // getServiceReviews(serviceId: string): Observable<any[]>
  // submitServiceReview(serviceId: string, review: any): Observable<any>
}