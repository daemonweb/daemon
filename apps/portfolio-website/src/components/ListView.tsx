import { For } from "solid-js";
import { Project } from "../types";

type ListViewProps = {
  title: string,
  description: string,
  projects: Project[]
}

const ListViewConfig = {
  title: "Project",
  publishDate: "Published",
  source: "Source",
}

const columns = Object.values(ListViewConfig);

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ListView(props: ListViewProps) {


    return (
      <div class="
        container 
        mx-auto 
        px-4 sm:px-8 lg:px-16
        overflow-x-scroll overflow-y-hidden
      ">
      
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900">{props.title}</h1>
            <p class="mt-2 text-sm text-gray-700">{props.description}</p>
          </div>
        </div>
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <For each={columns}>
                        {(column) => 
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{column}</th>
                        }
                      </For>
                      
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    
                    <For each={props.projects}>
                        {(project) => 
                          <tr>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">

                              <div class="flex items-center">
                                <div class="h-10 w-10 flex-shrink-0">
                                  <img class="h-10 w-10 rounded-full" src={project.thumbnail} alt=""/>
                                </div>
                                <div class="ml-4">
                                  <div class="font-medium text-gray-900">{project.title}</div>
                                  <div class="text-gray-500">{project.description}</div>
                                </div>
                              </div>
                            </td>

                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{formatDate(project.publishDate)}</span>
                            </td>

                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div class="flex justify-center text-gray-900">
                                <a href={project.repoUrl} class="text-indigo-600 hover:text-indigo-900">
                                  <img class="h-9" src="/github_logo.svg"/>
                                  </a>
                              </div>
                            </td>

                            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <a href={project.url} class="text-indigo-600 hover:text-indigo-900">Visit</a>
                            </td>
                          </tr>
                        }
                    </For>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )

}