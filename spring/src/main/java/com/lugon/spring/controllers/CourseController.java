package com.lugon.spring.controllers;

import com.lugon.spring.models.Course;
import com.lugon.spring.repositories.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository repository;

    @PostMapping
    public Object create() {
        return null;
    }

    @GetMapping
    public List<Course> readAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Object readById(@PathVariable Long id) {
        return null;
    }

    @PutMapping("/{id}")
    public Object update(@PathVariable Long id) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
