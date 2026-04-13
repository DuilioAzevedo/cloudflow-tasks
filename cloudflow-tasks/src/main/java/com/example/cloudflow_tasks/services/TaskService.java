package com.example.cloudflow_tasks.services;

import com.example.cloudflow_tasks.models.Task;
import com.example.cloudflow_tasks.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public List<Task> listarTodas() {
        return repository.findAll();
    }

    public Task salvar(Task task) {
        // Aqui poderíamos validar algo antes de salvar
        if (task.getTitle() == null || task.getTitle().isEmpty()) {
            throw new RuntimeException("O título não pode ser vazio!");
        }
        return repository.save(task);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
