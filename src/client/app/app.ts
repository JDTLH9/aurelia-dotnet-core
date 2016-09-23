﻿/// <reference path="../typings/index.d.ts" />
import {inject, singleton} from 'aurelia-framework';
import {Tasks} from './Tasks';
//import {TaskAddClient} from './clients/task-add-client';
import {HttpClient, json} from "aurelia-fetch-client";

// @inject(TaskAddClient)
// @singleton()
@inject(HttpClient)
export class App {
    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl("http://localhost:5400/")
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                        'content-type': 'application/json'
                    }
                });
        });

        this.http = http;
        this.tasks = [];
    }

    http: HttpClient;
    tasks: Tasks.Task[];

    addTask(taskToAdd: string, id: number) {
        let body = {
            id: id + 1,
            description: taskToAdd,
            completed: false
        };

        this.tasks.push(new Tasks.Task(body.id, body.description, body.completed));

        this.http.fetch("tasks/", {
            method: "post",
            body: JSON.stringify(body)    
        })
        .then()
        .then();
    }
}