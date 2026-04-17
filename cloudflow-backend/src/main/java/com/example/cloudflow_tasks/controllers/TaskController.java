package com.example.cloudflow_tasks.controllers;

import com.example.cloudflow_tasks.models.Task;
import com.example.cloudflow_tasks.repositories.TaskRepository;
import com.example.cloudflow_tasks.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {



    @Autowired
    private TaskService service;

    @GetMapping
    public List<Task> getAllTasks() {
        return service.listarTodas();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return service.salvar(task);
    }

    @PatchMapping("/{id}")
    public Task toggleTask(@PathVariable Long id) {
        return service.alternarConcluida(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deletar(id);
    }
}