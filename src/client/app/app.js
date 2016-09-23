System.register(['aurelia-framework', './Tasks', "aurelia-fetch-client"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, Tasks_1, aurelia_fetch_client_1;
    var App;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Tasks_1_1) {
                Tasks_1 = Tasks_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            }],
        execute: function() {
            // @inject(TaskAddClient)
            // @singleton()
            App = class App {
                constructor(http) {
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
                addTask(taskToAdd, id) {
                    let body = {
                        id: id + 1,
                        description: taskToAdd,
                        completed: false
                    };
                    this.tasks.push(new Tasks_1.Tasks.Task(body.id, body.description, body.completed));
                    this.http.fetch("tasks/", {
                        method: "post",
                        body: JSON.stringify(body)
                    })
                        .then()
                        .then();
                }
            };
            App = __decorate([
                aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), 
                __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
            ], App);
            exports_1("App", App);
        }
    }
});
