package com.example.cloudflow_tasks.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.cloudflow_tasks.models.Task;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}