export * from './clusters.service';
import { ClustersService } from './clusters.service';
export * from './machines.service';
import { MachinesService } from './machines.service';
export * from './projects.service';
import { ProjectsService } from './projects.service';
export * from './virtualMachines.service';
import { VirtualMachinesService } from './virtualMachines.service';
export const APIS = [ClustersService, MachinesService, ProjectsService, VirtualMachinesService];
