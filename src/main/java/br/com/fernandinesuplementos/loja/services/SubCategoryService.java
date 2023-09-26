package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.CategoryDto;
import br.com.fernandinesuplementos.loja.DTOs.SubcategoryDto;
import br.com.fernandinesuplementos.loja.entities.Category;
import br.com.fernandinesuplementos.loja.entities.Subcategory;
import br.com.fernandinesuplementos.loja.repositories.CategoryRepository;
import br.com.fernandinesuplementos.loja.repositories.SubCategoryRepository;
import br.com.fernandinesuplementos.loja.services.exceptions.DatabaseException;
import br.com.fernandinesuplementos.loja.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SubCategoryService {
    @Autowired
    private SubCategoryRepository repository;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public List<SubcategoryDto> findAll() {
        List<Subcategory> list = repository.findAll();
        return list.stream()
                .map(subcategoryDto -> modelMapper.map(subcategoryDto, SubcategoryDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public SubcategoryDto findById(Long id) {
        Optional<Subcategory> obj = repository.findById(id);
        Subcategory entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return modelMapper.map(entity, SubcategoryDto.class);
    }

    @Transactional
    public SubcategoryDto insert(SubcategoryDto dto) {
        Subcategory entity = new Subcategory();

        entity.setId(dto.getId());
        entity.setName(dto.getName());

        entity = repository.save(entity);
        return modelMapper.map(entity, SubcategoryDto.class);
    }

    @Transactional
    public SubcategoryDto update(Long id, SubcategoryDto dto) {
        try {
            Subcategory entity = repository.getReferenceById(id);

            entity.setId(dto.getId());
            entity.setName(dto.getName());

            entity = repository.save(entity);
            return modelMapper.map(entity, SubcategoryDto.class);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }
}

