export * from './clusterService.service';
import { ClusterServiceService } from './clusterService.service';
export * from './projectService.service';
import { ProjectServiceService } from './projectService.service';
export * from './virtualMachineService.service';
import { VirtualMachineServiceService } from './virtualMachineService.service';
export const APIS = [ClusterServiceService, ProjectServiceService, VirtualMachineServiceService];
