package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.ReviewDto;
import br.com.fernandinesuplementos.loja.entities.Product;
import br.com.fernandinesuplementos.loja.entities.Review;
import br.com.fernandinesuplementos.loja.entities.User;
import br.com.fernandinesuplementos.loja.repositories.ProductRepository;
import br.com.fernandinesuplementos.loja.repositories.ReviewRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public List<ReviewDto> findAll() {
        List<Review> list = repository.findAll();
        return list.stream()
                .map(order -> modelMapper.map(order, ReviewDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ReviewDto insert(ReviewDto dto) {
        Review entity = new Review();
        copyEntityToDTO(entity, dto);
        entity = repository.save(entity);
        return modelMapper.map(entity, ReviewDto.class);
    }

    public void copyEntityToDTO(Review entity, ReviewDto dto) {

        entity.setComment(dto.getComment());

        Product product = productRepository.getReferenceById(dto.getProductId());
        entity.setProduct(product);

    }
}
