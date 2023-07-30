package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.ProductDto;
import br.com.fernandinesuplementos.loja.entities.Product;
import br.com.fernandinesuplementos.loja.entities.ProductDetails;
import br.com.fernandinesuplementos.loja.entities.enums.Flavors;
import br.com.fernandinesuplementos.loja.repositories.CategoryRepository;
import br.com.fernandinesuplementos.loja.repositories.ProductRepository;
import br.com.fernandinesuplementos.loja.services.exceptions.DatabaseException;
import br.com.fernandinesuplementos.loja.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public List<ProductDto> findAll() {
        List<Product> list = repository.findAll();
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ProductDto> findByFavorite(boolean notFavorite) {
        List<Product> list = repository.findByFavorite(notFavorite);
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ProductDto> findBySale(boolean notSale) {
        List<Product> list = repository.findBySale(notSale);
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ProductDto> findByFeature(boolean notFeature) {
        List<Product> list = repository.findByFeature(notFeature);
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDto findById(Long id) {
        Optional<Product> obj = repository.findById(id);
        Product product = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return modelMapper.map(product, ProductDto.class);
    }

    @Transactional(readOnly = true)
    public List<ProductDto> findByName(String name) {
        List<Product> list = repository.findByNameCategory(name);
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    // BUSCA OS PRODUTOS MAIS VENDIDOS
    @Transactional(readOnly = true)
    public List<ProductDto> getBestSellers(int limit) {
        List<Product> list = repository.findBestSellers(PageRequest.of(0, limit));
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    //BUSCA OS PRODUTOS RECENTES
    @Transactional(readOnly = true)
    public List<ProductDto> findMostRecentProductsByCreationDate(int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        List<Product> list = repository.findMostRecentProductsByCreationDate(pageable);
        return list.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<Product> findProductsByPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return repository.findByUnitPriceBetween(minPrice, maxPrice);
    }

    @Transactional
    public ProductDto insert(ProductDto dto) {
        Product entity = new Product();
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return modelMapper.map(entity, ProductDto.class);
    }
    @Transactional(readOnly = true)
    public List<Product> getProductsByFlavor(Flavors flavors) {
        return repository.findByFlavor(flavors);
    }
    @Transactional
    public ProductDto update(Long id, ProductDto dto) {
        try {
            Product entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return modelMapper.map(entity, ProductDto.class);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void copyDtoToEntity(ProductDto dto, Product entity) {

        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setImage(dto.getImage());
        entity.setSku(dto.getSku());
        entity.setFavorite(dto.isFavorite());
        entity.setFavorite(dto.isFeature());
        entity.setFavorite(dto.isSale());
        entity.setUnitsInStock(dto.getUnitsInStock());
        entity.setUnitPrice(dto.getUnitPrice());
    }
}
