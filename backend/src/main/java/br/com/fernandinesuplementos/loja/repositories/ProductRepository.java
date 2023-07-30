package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.Product;
import br.com.fernandinesuplementos.loja.entities.enums.Flavors;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    //BUSCA OS FAVORITOS
    @Query("SELECT obj FROM Product obj WHERE "
            + "(:notFavorite = false OR obj.favorite = false) ")
    List<Product> findByFavorite(boolean notFavorite);

    //BUSCA OS DESTAQUES
    @Query("SELECT obj FROM Product obj WHERE "
            + "(:notFeature = false OR obj.feature = false) ")
    List<Product> findByFeature(boolean notFeature);

    //BUSCA OS PRODUTOS EM PROMOÇÃO
    @Query("SELECT obj FROM Product obj WHERE "
            + "(:notSale = false OR obj.sale = false) ")
    List<Product> findBySale(boolean notSale);

    //BUSCA OS PRODUTOS MAIS VENDIDOS
    @Query("SELECT p FROM Product p ORDER BY p.salesCount DESC")
    List<Product> findBestSellers(Pageable pageable);

    // BUSCA OS PRODUTOS MAIS RECENTES COM BASE NA DATA DE CRIAÇÃO
    @Query("SELECT p FROM Product p ORDER BY p.dateCreated DESC")
    List<Product> findMostRecentProductsByCreationDate(Pageable pageable);

    @Query("SELECT p FROM Product p JOIN p.category c WHERE c.name = :name")
    List<Product> findByNameCategory(@Param("name") String name);

    @Query("SELECT p FROM Product p JOIN p.details d WHERE d.flavors = :flavors")
    List<Product> findByFlavor(@Param("flavors") Flavors flavors);

    List<Product> findByUnitPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);
}
