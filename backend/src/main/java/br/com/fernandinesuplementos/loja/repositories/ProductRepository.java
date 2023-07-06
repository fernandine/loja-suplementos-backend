package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    //BUSCA OS FAVORITOS
    @Query("SELECT obj FROM Product obj WHERE "
            + "(:notFavorite = false OR obj.favorite = false) ")
    List<Product> find(boolean notFavorite);

    //BUSCA OS PRODUTOS MAIS VENDIDOS
    @Query("SELECT p FROM Product p ORDER BY p.salesCount DESC")
    List<Product> findBestSellers(Pageable pageable);

    // BUSCA OS PRODUTOS MAIS RECENTES COM BASE NA DATA DE CRIAÇÃO
    @Query("SELECT p FROM Product p ORDER BY p.dateCreated DESC")
    List<Product> findMostRecentProductsByCreationDate(Pageable pageable);

    @Query("SELECT p FROM Product p JOIN p.category c WHERE c.name = :name")
    List<Product> findByNameCategory(@Param("name") String name);
}
